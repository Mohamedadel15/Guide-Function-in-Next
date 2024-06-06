"use client";

import { Button } from "@/components/ui/button";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const MenuBar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-4 w-full mb-8">
      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "secondary"}
      >
        Bold
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "secondary"}
      >
        Italic
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "secondary"}
      >
        Strike
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        variant={editor.isActive("unsetAllMarks") ? "default" : "secondary"}
      >
        Clear Marks
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
        variant={editor.isActive("clearNodes") ? "default" : "secondary"}
      >
        Clear Nodes
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        variant={editor.isActive("paragraph") ? "default" : "secondary"}
      >
        Paragraph
      </Button>

      <Button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={editor.isActive('heading' , {level : 1}) ? 'default' : 'secondary'}
      >
        H1
      </Button>

    </div>
  );
};

export const TipTabEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World</p>",
    editorProps: {
      // To avoid conflict with the prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert Classes U should Install This Package.
      // npm install -D @tailwindcss/typography
      // in Tailwind.config.js file and add this code require('@tailwindcss/typography') in plugins array. 
        attributes: {
            class: "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl dark:prose-invert focus:outline-none min-h-[300px]",
        }
    }
  });

  return (
    <div className="flex gap-4 flex-col">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} className="rounded-md border-2 p-2 min-h-[300px]" />
    </div>
  );
};
