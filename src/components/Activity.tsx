export interface ActivityItemProps {
  period: string;
  whether?: string;
  institutionLink?: string;
  institution: string;
  courseLink?: string;
  course: string;
}

const ActivityInfo = ({
  period,
  whether,
  institutionLink,
  institution,
  courseLink,
  course,
}: ActivityItemProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <div className="text-sm text-gray-400">{period}</div>
        {whether && <div className="text-sm text-gray-400">{whether}</div>}
      </div>
      <div className="mb-2">
        <a
          href={institutionLink}
          className="text-lg font-medium hover:underline"
          target="_blank"
        >
          {institution}
        </a>
      </div>
      {courseLink ? (
        <div className="mb-2">
          <a
            href={courseLink}
            className="text-gray-300 font-medium hover:underline"
            target="_blank"
          >
            {course}
          </a>
        </div>
      ) : (
        <div className="text-gray-300">{course}</div>
      )}
    </div>
  );
};

interface ActivityProps {
  title: string;
  content: ActivityItemProps[];
}

export const Activity = ({ title, content }: ActivityProps) => {
  return (
    <section className="mb-5" id="activity">
      <p className="text-3xl font-bold">{title}</p>
      <hr className="border-t border-gray-700 my-3 w-full" />
      <div className="grid grid-cols-1 gap-4">
        {content.map((info, index) => (
          <ActivityInfo key={index} {...info} />
        ))}
      </div>
    </section>
  );
};
