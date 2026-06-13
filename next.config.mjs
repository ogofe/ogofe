/** @type {import('next').NextConfig} */
const nextConfig = {
	// export static HTML so sub-paths can be served with the _redirects rule
	output: "export",
	// ensure paths work when serving from a static host
	trailingSlash: true,
};

export default nextConfig;
