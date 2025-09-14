const WysiwygBlock = ({ block }) => {
  console.log(block);
  return (
    <section className="py-20">
      <div
        className="w-full max-w-4xl mx-auto prose text-zinc-200 bg-red-500"
        dangerouslySetInnerHTML={{ __html: block.content.wysiwygContent }}
      />
    </section>
  );
};

export { WysiwygBlock };
