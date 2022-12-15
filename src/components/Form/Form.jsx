import React, { useEffect, useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css';

const Form = () => {
	const [country, setCountry] = useState('');
	const [street, setStreet] = useState('');
	const [subject, setSubject] = useState('flat');
	const {tg} = useTelegram();

	useEffect(() => {
		tg.MainButton.setParams({
			text: 'Submit'
		});
	}, [tg]);

	useEffect(() => {
		if(!street || !country){
			tg.MainButton.hide();
		}else{
			tg.MainButton.show();
		}
	}, [street, country, tg]);

	const onChangeCountry = (e) => {
		setCountry(e.target.value);
	}

	const onChangeStreet = (e) => {
		setStreet(e.target.value);
	}

	const onChangeSubject = (e) => {
		setSubject(e.target.value);
	}

	return (
		<>
			<input className={'input'} onChange={onChangeCountry} value={country} type="text" placeholder={'Country'} />
			<input className={'input'} onChange={onChangeStreet} value={street} type="text" placeholder={'Street'} />
			
			<select value={subject} className={'select'} onChange={onChangeSubject}>
				<option value={'flat'}>Flat</option>
				<option value={'house'}>House</option>
			</select>
		</>
	)
}

export default Form