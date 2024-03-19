import gapLogo from './../assets/logos/gap_logo.svg'
import globantLogo from './../assets/logos/globant_logo.svg'
import walmartLogo from './../assets/logos/walmart_logo.svg'
import lendingclubLogo from './../assets/logos/lendingclub_logo.svg'

export default function TrustedBy() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={gapLogo}
            alt="GAP"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={globantLogo}
            alt="Globant"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={walmartLogo}
            alt="Walmart"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={lendingclubLogo}
            alt="LendingClub"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}
