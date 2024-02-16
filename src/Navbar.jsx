import React, { useState, useEffect } from "react";


function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
  }, []);

  return (
		<div className="navbar-home top-0 py-2 px-5 lg:py-5 w-full bg-transparent lg:relative z-50">
			<nav className="bg-[#282828] max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none rounded-lg">
				<div className="flex items-center justify-between">
					<button>
						<div className="header-logo flex items-center space-x-2">
							<img src="/logo.png" alt="" />
							<h2 className="text-white font-bold text-base">
								WebsiteDesignerInPoland
							</h2>
						</div>
					</button>
					<div className="header-menu items-center gap-x-10">
						<ul className="flex space-x-10 text-sm font-bold text-white hover:text-white">
							<li>
								<a href="mailto:admin@fessburn.com">
									<button className="text-white">
										{isDesktop
											? 'Send us a message'
											: 'Contact'}
									</button>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
  );
}

export default Navbar;
