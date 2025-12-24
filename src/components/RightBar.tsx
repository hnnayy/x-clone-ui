import React from 'react'

function RightBar() {
  return (
    <div className="w-80 sticky top-0">
      {/* Search Container */}
      <div className="mb-4 p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full bg-[#fffdec] rounded-none py-3 px-4 pl-12 text-black placeholder-[#2a623d] focus:outline-none focus:border-2 border border-[#2a623d]"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-[#2a623d]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="border border-[#6abf87] rounded-none p-4 mb-4 mx-4">
        <h2 className="text-xl font-bold text-black mb-4">What&apos;s happening</h2>
        <div className="space-y-0">
          <div className="hover:bg-[#FFE2E2] rounded-none p-3 cursor-pointer transition-colors py-4">
            <div className="text-[#2a623d] text-sm">Trending in Indonesia</div>
            <div className="text-black font-bold text-base">#Indonesia</div>
            <div className="text-[#2a623d] text-sm">1.2M posts</div>
          </div>
          <div className="hover:bg-[#FFE2E2] rounded-none p-3 cursor-pointer transition-colors py-4">
            <div className="text-[#2a623d] text-sm">Trending</div>
            <div className="text-black font-bold text-base">#ReactJS</div>
            <div className="text-[#2a623d] text-sm">50.1K posts</div>
          </div>
          <div className="hover:bg-[#FFE2E2] rounded-none p-3 cursor-pointer transition-colors py-4">
            <div className="text-[#2a623d] text-sm">Trending</div>
            <div className="text-black font-bold text-base">#NextJS</div>
            <div className="text-[#2a623d] text-sm">25.3K posts</div>
          </div>
        </div>
        <div className="text-[#2a623d] hover:underline cursor-pointer mt-4 p-3 text-sm font-bold">Show more</div>
      </div>

      {/* Follow Section */}
      <div className="border border-[#6abf87] rounded-none p-4 mx-4">
        <h2 className="text-xl font-bold text-black mb-4">Who to follow</h2>
        <div className="space-y-0">
          <div className="flex items-center justify-between hover:bg-[#FFE2E2] rounded-none p-3 cursor-pointer transition-colors py-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-[#2a623d] rounded-none flex-shrink-0"></div>
              <div className="user-info">
                <div className="text-black font-bold text-sm">Elon Musk</div>
                <div className="text-[#2a623d] text-sm">@elonmusk</div>
              </div>
            </div>
            <button className="bg-[#2a623d] text-white font-bold py-1 px-6 rounded-none hover:bg-[#1d4d2a] transition-colors text-sm ml-2">
              Follow
            </button>
          </div>
          <div className="flex items-center justify-between hover:bg-[#FFE2E2] rounded-none p-3 cursor-pointer transition-colors py-4">
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-[#2a623d] rounded-none flex-shrink-0"></div>
              <div className="user-info">
                <div className="text-black font-bold text-sm">Twitter</div>
                <div className="text-[#2a623d] text-sm">@Twitter</div>
              </div>
            </div>
            <button className="bg-[#2a623d] text-white font-bold py-1 px-6 rounded-none hover:bg-[#1d4d2a] transition-colors text-sm ml-2">
              Follow
            </button>
          </div>
        </div>
        <div className="text-[#2a623d] hover:underline cursor-pointer mt-4 p-3 text-sm font-bold">Show more</div>
      </div>

      {/* Footer */}
      <div className="text-[#2a623d] text-xs p-4">
        <div className="footer-links space-y-2 mb-3">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <a href="#" className="hover:underline">More...</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar
