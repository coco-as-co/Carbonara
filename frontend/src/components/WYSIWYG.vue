<script>
import { useEditor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'

import { Editor } from '@tiptap/vue-3'

export default {
    components: {
        EditorContent,
        Bold,
        FloatingMenu
    },

    props: {
        modelValue: {
            type: String,
            default: '',
        },
    },

    emits: ['update:modelValue'],

    data() {
        return {
            editor: null,
        }
    },

    watch: {
        '_formValues.content': function (newVal, oldVal) {
            console.log("Content updated: ", newVal);
        }
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                StarterKit,
                Bold,
                FloatingMenu
            ],
            content: this.modelValue,
            onUpdate: ({ editor }) => {
                const htmlContent = editor.getHTML();
                console.log("Editor content updated: ", htmlContent);
                this.$emit('update:modelValue', htmlContent);
            },
        })
    },

    beforeUnmount() {
        this.editor.destroy()
    },
}

</script>

<template>
    <div v-if="editor"
        class="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-700 focus:border-[#5B98D2] focus:outline-none">
        <div class="flex flex-col">
            <div class="box-border flex gap-3 border-b-2 header border-b-gray-300">
                <button @click.prevent="editor.chain().focus().toggleBold().run()"
                    class="box-border px-2 py-1 bg-white rounded-none border-none transition-all duration-150 outline-none active:outline-none"
                    :class="{ 'text-[#5B98D2]': editor.isActive('bold') }">
                    <font-awesome-icon :icon="['fas', 'bold']" />
                </button>

            </div>
            <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
                <button @click.prevent="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    class="box-border px-2 py-1 bg-white rounded-none border-none transition-all duration-150 outline-none active:outline-none rounded-e-none"
                    :class="{ 'text-[#5B98D2]': editor.isActive('heading', { level: 1 }) }">
                    H1
                </button>
                <button @click.prevent="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    class="box-border px-2 py-1 bg-white border border-none transition-all duration-150 outline-none rounded-none-none active:outline-none"
                    :class="{ 'text-[#5B98D2]': editor.isActive('heading', { level: 2 }) }">
                    H2
                </button>
                <button @click.prevent="editor.chain().focus().toggleBulletList().run()"
                    class="box-border px-2 py-1 bg-white rounded-none border-none transition-all duration-150 outline-none active:outline-none rounded-s-none"
                    :class="{ 'text-[#5B98D2]': editor.isActive('bulletList') }">
                    Bullet List
                </button>
            </floating-menu>
            <editor-content :editor="editor" :class="' focus:outline-none'" />
        </div>
    </div>
</template>  

<style>
.ProseMirror {
    outline: none;
    padding: 0.6rem;
}

.ProseMirror *+* {
    margin-top: 0.75em;
}


.ProseMirror ul,
.ProseMirror ol {
    padding: 0 1rem;
}
</style>