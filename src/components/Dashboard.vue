<template>
    <div class="dashboard">
        <div>
            <h1>Firebase FireStore with Vue</h1>
            <router-link to="/register">Register</router-link> |
            <router-link to="/realtimedatabasecrud">Realtime</router-link> |

        </div>
    </div>
</template>

<script>


export default {
    name: 'Dashboard',

}
</script>

<style>
    .dashboard {
        color:aqua;
    }
</style>