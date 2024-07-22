<template>
    <div>
        <h1>Firebase Realtime Database CRUD</h1>
        <input v-model="newItem.name" placeholder="Enter item name" />
        <button @click="createItem">Add Item</button>
        <br><br>
        <input v-model="newItem2.name" placeholder="Enter Update" />

        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.name }}

                <button @click="deleteItem(item.id)">Delete</button>
                <button @click="updateItem(item.id, newItem2.name )">Update</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, push, onValue, remove, update } from 'firebase/database';
import { realtime } from '../firebase';

export default {
    name: 'RealtimeDatabaseCrud',
    data() {
        return {
            newItem: {
                name: ''
            },
            newItem2: {
                name: ''
            },
            items: []
        }
    },
    mounted() {
        const itemsRef = ref(realtime, 'items');
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                this.items = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            } else {
                this.items = [];
            }
        });
    },
    methods: {
        async createItem() {
            if (this.newItem.name.trim()) {
                const itemsRef = ref(realtime, 'items');
                await push(itemsRef, this.newItem);
                this.newItem.name = '';
            }
        },
        async deleteItem(id) {
            const itemRef = ref(realtime, `items/${id}`);
            await remove(itemRef);
        },
        async updateItem(id, newName) {
            const itemRef = ref(realtime, `items/${id}`);
            await update(itemRef, { name: newName });
            this.newItem2.name = '';
        }
    }
}
</script>