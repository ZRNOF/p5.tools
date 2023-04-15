// noprotect

const extendMode = `
	// MIT License
	// Copyright © 2023 Zaron
	// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
	// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	// Image extend mode - hold
	vec4 hold(vec2 uv, sampler2D img) {
		return texture2D(img, uv);
	}

	// Image extend mode - mirror
	vec4 mirror(vec2 uv, sampler2D img) {
		vec2 iuv = floor(uv);
		uv *= 1.-2.*mod(iuv, 2.);
		return texture2D(img, fract(uv));
	}

	// Image extend mode - one
	vec4 one(vec2 uv, sampler2D img) {
		if (0. <= uv.x && uv.x <= 1. && 0. <= uv.y && uv.y <= 1.) {
			return texture2D(img, uv);
		}
		else { return vec4(1.); }
	}

	// Image extend mode - repeat
	vec4 repeat(vec2 uv, sampler2D img) {
		return texture2D(img, fract(uv));
	}

	// Image extend mode - zero
	vec4 zero(vec2 uv, sampler2D img) {
		if (0. <= uv.x && uv.x <= 1. && 0. <= uv.y && uv.y <= 1.) {
			return texture2D(img, uv);
		}
		else { return vec4(0.); }
	}

	// Coordinate extend mode - mirror
	vec2 mirror(vec2 uv, float num) {
		uv *= num;
		vec2 iuv = floor(uv);
		uv *= 1.-2.*mod(iuv, 2.);
		return fract(uv);
	}

	// Coordinate extend mode - mirror
	vec2 mirror(vec2 uv, vec2 grid) {
		uv *= grid;
		vec2 iuv = floor(uv);
		uv *= 1.-2.*mod(iuv, 2.);
		return fract(uv);
	}

	// Coordinate extend mode - repeat
	vec2 repeat(vec2 uv, float num) {
		return fract(uv*num);
	}

	// Coordinate extend mode - repeat
	vec2 repeat(vec2 uv, vec2 grid) {
		return fract(uv*grid);
	}
`