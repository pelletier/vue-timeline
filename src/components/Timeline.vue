<template>
    <div>
        <ul>
            <li v-for="element in normalizedList" v-bind:key="element.id">
                <fa v-if="element.icon" :icon="element.icon" class="icon"/>
                <slot name="element" v-bind:element="element">
                    <span class="title">{{element.title}}</span>
                    {{element.text}}
                </slot>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    props: {
        'elements': {
            type: Array,
            required: true
        }
    },
    data() {
        return {};
    },
    computed: {
        normalizedList: function() {
            // normalizes the given elements to a list of
            // {title, text, icon, id}
            var normalized = [];
            var position = 0;
            for (const element of this.elements) {
                var normalizedElement = element;
                if (typeof element === 'string' || element instanceof String) {
                    normalizedElement = {
                        id: position,
                        title: element,
                        text: null,
                        icon: null
                    };
                }
                normalized.push(normalizedElement);
                position += 1;
            }
            return normalized;
        }
    }
}
</script>

<style lang="less" scoped>
    ul {
        list-style: none;
        padding: 0px;
        position: relative;

        &:before {
            content: " ";
            background: #dfe0ea;
            position: absolute;
            width: 4px;
            height: calc(100% - 2px);
            top: 1px;
            left: 14px;
        }

        li {
            margin-left: 36px;
            margin-bottom: 1rem;

            &:before {
                content: " ";
                width: 7px;
                height: 7px;
                border-radius: 7px;
                background-color: white;
                border: 4px solid #dfe0ea;
                display: block;
                position: absolute;
                left: 9px;
                margin-top: 1px;
            }
        }
    }

    .title {
        font-weight: 700;
        font-size: 0.8rem;
    }

    .icon {
        position: absolute;
        width: 14px;
        left: 4px;
        height: 14px;
        color: #fff;
        background: #7a7b97;
        padding: 5px;
        border-radius: 100%;
    }
</style>
