import type { GitHubRateLimit } from '../types/github'

interface RateLimitProps {
  rateLimit: GitHubRateLimit
}

function RateLimit({ rateLimit }: RateLimitProps) {
  return (
    <div>
      <p>
        API Requests Remaining:{' '}
        {rateLimit.remaining} / {rateLimit.limit}
      </p>
    </div>
  )
}

export default RateLimit
