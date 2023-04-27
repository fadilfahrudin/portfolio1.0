import React from "react";
import "./index.css";

const Tool = ({ src, ...rest }) => {
	return (
		<a {...rest} className='wrapper-tool'>
			<img src={src} alt='icon' className='logoTools' />
		</a>
	);
};
// noted: rest parameter dapat menampung semua variabel di dalam fungsi tanpa harus mendeklarasikan
// contoh: a mempunyai property href, maka tanpa kita deklarasikan href nya di dalam parameter, kita dapat mengisi href pada component tersebut

export default Tool;
