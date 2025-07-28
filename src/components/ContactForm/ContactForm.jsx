import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ContactForm.scss";

const ContactForm = () => {
	const { t } = useTranslation();

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
				<p style={{ fontSize: "2rem", marginBottom: 15 }}>
					{t("contact_form.title")}
				</p>
				<p>{t("contact_form.info")}</p>
			</div>
			<form
				className="contact__form"
				action="mailto:kristian.janko@email.cz"
				method="post"
				encType="text/plain"
			>
				<div>
					<p style={{ marginBottom: 15 }}>{t("contact_form.checkbox_title")}</p>
					<div className="contact__checkbox-wrapper">
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-1"
								defaultValue="Residential buildings"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-1">{t("residential")}</label>
						</div>
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-2"
								defaultValue="Commercial buildings"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-2">{t("commercial")}</label>
						</div>
						<div className="checkbox-container">
							<input
								type="checkbox"
								id="checkbox-3"
								defaultValue="Other"
								name="I am interested in"
							/>
							<label htmlFor="checkbox-3">
								{t("contact_form.checkbox_label_3")}
							</label>
						</div>
					</div>
				</div>
				<div className="input-container">
					<label className="label" htmlFor="first-name">
						{t("contact_form.first_name")}
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
						{t("contact_form.last_name")}
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
						{t("tel")}
					</label>
					<input className="input" id="tel" type="tel" name="Tel" required />
				</div>
				<div className="input-container text-area-container">
					<label className="label" htmlFor="message">
						{t("contact_form.message")}
					</label>
					<textarea className="input" name="Message" id="message"></textarea>
				</div>
				<button type="submit">{t("contact_form.send")}</button>
			</form>
		</div>
	);
};

export default ContactForm;
