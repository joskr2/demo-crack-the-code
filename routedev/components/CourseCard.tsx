/* eslint-disable @next/next/no-img-element */
import { Course } from '@/interfaces/interfaces'
import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'

interface Props {
  course: Course
}

const CourseCard: FC<Props> = ({ course }) => {
  return (
    <div className="group relative rounded-lg p-3">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-25 lg:h-80">
        <Image
          // src={course.thumbnail}// error 403 , forbiden access
          src={'/course.jpeg'}
          alt={course.name}
          fill
          style={{ objectFit: 'cover' }}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/courses/${course.id}`} className="absolute inset-0">
              <span aria-hidden="true" />
              {course.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{course.description}</p>
        </div>
        <div className="flex justify-center items-center m-1 px-2 py-1 rounded-full bg-yellow-700  text-sm font-medium text-gray-900 h-fit">
          <p className="flex-initial w-fit leading-none text-xs font-normal ml-2 cursor-pointer">{course.amount_usd}</p>
        </div>
      </div>
    </div >
  )
}

export default CourseCard