import { useEffect } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
	useEffect(() => {
		const inputs = document.querySelectorAll(".input");
		const labels = document.querySelectorAll(".label");

		inputs.forEach((input, index) => {
			input.addEventListener("input", () => {
				const inputValue = input.value;

				if (inputValue.length > 0) {
					input.classList.add("input--active");
					labels[index].classList.add("label--active");
				} else {
					input.classList.remove("input--active");
					labels[index].classList.remove("label--active");
				}
			});
		});
	}, []);
	return (
		<div className="contact__form-container">
			<div>
				<p style={{ fontSize: "2rem", marginBottom: 15 }}>Контактна форма</p>
				<p>Заповніть форму, і я зв'яжуся з вами протягом 24 годин</p>
			</div>
			<form
				className="contact__form"
				action="mailto:kristian.janko@email.cz"
				method="post"
				encType="text/plain"
			>
				<div>
					<p style={{ marginBottom: 15 }}>Я зацікавлений в</p>
					<div className="contact__checkbox-wrapper">
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-1"
								defaultValue="Residential buildings"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-1">Житлові будинки</label>
						</div>
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-2"
								defaultValue="Commercial buildings"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-2">Комерційні будинки</label>
						</div>
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-3"
								defaultValue="Other"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-3">Інше</label>
						</div>
					</div>
				</div>
				<div className="input-container">
					<label className="label" htmlFor="first-name">
						Ім'я
					</label>
					<input
						className="input"
						id="first-name"
						type="text"
						name="First name"
						required
					/>
				</div>
				<div className="input-container">
					<label className="label" htmlFor="last-name">
						Прізвище
					</label>
					<input
						className="input"
						id="last-name"
						type="text"
						name="Second name"
					/>
				</div>
				<div className="input-container">
					<label className="label" htmlFor="tel">
						Номер телефону
					</label>
					<input className="input" id="tel" type="tel" name="Tel" required />
				</div>
				<div className="input-container text-area-container">
					<label className="label" htmlFor="message">
						Повідомлення
					</label>
					<textarea className="input" name="Message" id="message"></textarea>
				</div>
				<button type="submit">Відправити</button>
			</form>
		</div>
	);
};

export default ContactForm;
