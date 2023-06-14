/* eslint-disable @next/next/no-img-element */

import classNames from 'classnames';
import { Demo } from "@/intefaces/interface";
import { StarIcon } from '@heroicons/react/solid';

interface CourseReviewsProps {
  learnPath: Demo;
}

const CourseLearnings: React.FC<CourseReviewsProps> = ({ learnPath }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4  p-6">Reviews</h3>
      {learnPath?.benefits.map((learning, index) => (
        <div key={index} className="flex space-x-4 text-sm text-gray-500 mb-6">
          <div className="flex-none py-10">
            <img src={learning?.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
          </div>
          <div className={classNames(index === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
            <h4 className="font-medium text-gray-900">{learning?.author}</h4>
            <p>
              <time dateTime={learning?.datetime}>{learning?.date}</time>
            </p>

            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    learning?.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{learning?.rating} out of 5 stars</p>

            <div
              className="prose prose-sm mt-4 max-w-none text-gray-500"
              dangerouslySetInnerHTML={{ __html: learning?.content }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseLearnings;
