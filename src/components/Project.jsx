import{ useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
                   visibility
}) => {
  const [isHidden, setIsHidden] = useState(false);

  const getBadgeClass = (visibility) => {
    switch (visibility) {
      case "private":
        return "text-red-300";
      case "public":
        return "text-amber-300";
      case "hobby":
        return "text-[#57db96]";
      default:
        return "bg-gray-500/50 text-gray-300";
    }
  };

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title} <small className={`text-sm border px-1 rounded-lg ${getBadgeClass(visibility)}`}>{visibility}</small></p>
          <div className="flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          visibility={visibility}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
