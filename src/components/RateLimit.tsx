import type { GitHubRateLimit } from '../types/github'

interface RateLimitProps {
  rateLimit: GitHubRateLimit
}

function RateLimit({
  rateLimit,
}: RateLimitProps) {
  const isLow =
    rateLimit.remaining <= 10

  return (
    <div className="rate-limit">
      <p>
        API Requests Remaining:{' '}
        {rateLimit.remaining} /{' '}
        {rateLimit.limit}
      </p>

      {isLow && (
        <p className="rate-warning">
          Warning: You are close to the
          GitHub API rate limit.
        </p>
      )}
    </div>
  )
}

export default RateLimit