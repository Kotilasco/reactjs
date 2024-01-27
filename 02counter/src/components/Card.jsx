const Card = () => {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://lh3.googleusercontent.com/a/ACg8ocLEfQV_i6ZVKLCQG5VdBF8sFQ3yrDmc75WjhXL0uok0MQ=s192-c-rg-br100"
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I&apos;ve seen scale on
              large teams. It’s easy to customize, adapts to any design, and the
              build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
