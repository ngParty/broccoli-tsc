
declare class Filter {
	constructor(inputTree: string, options: any);
	getCacheDir()
	write(readTree, destDir)
	cleanup()
	canProcessFile(relativePath)
	getDestFilePath(relativePath)
	processAndCacheFile(srcDir, destDir, relativePath)
	processFile(srcDir, destDir, relativePath)
}
	
declare module 'broccoli-filter' {
	export = Filter;
}