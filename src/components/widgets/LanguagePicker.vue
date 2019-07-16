<template>
    <div class="languagepicker" @click="toggleModalLanguages = !toggleModalLanguages">
        <svg class="icon-lang">
            <use xlink:href="#icon-lang" href="#icon-lang" />
        </svg>

        <div class="modal languages" :class="{ opened: toggleModalLanguages }">
            <div class="languages-container">
                <router-link :to="{ path: 'en' }" @click="toggleModalLanguages = !toggleModalLanguages">English</router-link>
                <router-link :to="{ path: 'he' }" @click="toggleModalLanguages = !toggleModalLanguages">עברית</router-link>
                <router-link :to="{ path: 'fr' }" @click="toggleModalLanguages = !toggleModalLanguages">Français</router-link>
            </div>
        </div>
    </div>
</template>

<script>
const initialData = () => {
    return {
        productInForm: {
            id: null,
            name: "",
            description: "",
            price: null
        }
    };
};

export default {
    data() {
        return {
            initialData,
            toggleModalLanguages: false
        }
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
.languagepicker {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 15px;
    right: 15px;
    padding: 0;
    height: 50px;
    width: 50px;
    overflow: hidden;
    transition: all .3s ease;
    z-index: 1000;

    .icon-lang {
        cursor: pointer;
        color: #fff;
        opacity: 0.5;
        transition: all .2s ease-in-out;
        z-index: 10000;
    }
    &:hover .icon-lang {
        opacity: 1;
    }

    svg {
        width: 40px;
        height: 40px;
    }
}

.modal.languages {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    transition: all .2s ease-in-out;
    background: linear-gradient(135deg, #a540e0, #ff0080, #ff8c00, #40e0d0, #40b1e0); background-size: 600% 600%; animation: bgGradientAnimate 30s ease-in-out infinite;
    &.opened {
        opacity: 1;
        visibility: visible;
    }
    a { 
        display: block; 
        font-size: 50px;
        padding: 10px 0;
    }
}
</style>
