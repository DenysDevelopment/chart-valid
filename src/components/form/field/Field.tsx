import { FC, forwardRef } from "react";
import { IField, IFieldProps } from "./field.interface";

import style from "./Field.module.scss";

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, ...rest }, ref) => {
		return (
			<div className={style.field}>
				<div className={style.wrap}>
					<input
						className={style.input}
						style={{
							border: error?.type && "3px solid red",
						}}
						ref={ref}
						placeholder={placeholder}
						{...rest}
					/>
					<span className={style.icon}>icon</span>
				</div>
				<b className={style.error}>{error?.message}</b>
			</div>
		);
	},
);

Field.displayName = "Field";

export default Field;
