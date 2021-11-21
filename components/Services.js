/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'AI Candidate Sourcing',
    description:
      '',
    icon: GlobeAltIcon,
  },
  {
    name: 'Full-Cycle Recruiting Model',
    description:
      '',
    icon: ScaleIcon,
  },
  {
    name: '',
    description:
      '',
    icon: LightningBoltIcon,
  },
]

export default function Services() {
  return (
    <div className="p-16 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl text-center mb-8">
          What we offer:
        </h2>
        <h2 className="sr-only">What we offer</h2>
        <dl className="flex items-center justify-evenly text-center" style={{textAlign: '-webkit-center'}}>
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-sourceable-blue text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}