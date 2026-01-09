
// @ts-ignore
import navmeshcppjs from '../bindings/prebuilds/win32-x64/navmeshcppjs.node';
// @ts-ignore
//import navmeshcppjs from '../bindings/prebuilds/linux-x64/navmeshcppjs.node';

export type Point = {
	x: number;
	y: number;
};

class Navmeshcppjs {
	static initialize(inflate = 0) {
		navmeshcppjs.initialize(inflate);
	}

	static getPath(startPoint: Point, endPoint: Point): Point[] {
		return navmeshcppjs.pf(startPoint.x, startPoint.y, endPoint.x, endPoint.y);
	}
}

export default Navmeshcppjs;
