<template>
    <div class="hireMe">
      <button @click="hireMe">
        {{ $t("message.hire") }} </button>
        <FontAwesomeIcon :icon="['far', 'comment-dots']" />
    </div>
</template>

<script setup>
const hireMe = () => {
    window.location.href = "mailto:annaboiko1@icloud.com";
};
</script>
