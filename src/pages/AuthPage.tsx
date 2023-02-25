import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Field from "../components/form/field/Field";

type Inputs = {
	login: string;
	password: string;
};

const AuthPage: FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>({
		mode: "onBlur",
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
		reset();
	};
	return (
		<>
			<Link to={"/"}>back</Link>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					placeholder='Login'
					{...register("login", { required: "Введіть правильний логін" })}
					error={errors.login}
				/>
				<Field
					placeholder='Password'
					{...register("password", { required: "Введіть правильний пароль" })}
					error={errors.password}
					type='password'
				/>
				<input type='submit' />
			</form>
		</>
	);
};

export default AuthPage;
