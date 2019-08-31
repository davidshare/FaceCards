import React from "react";
import './card-list.syles.css';
import { Card } from '../card/card.component';

export const CardList = props => (
	<div className="card-list">
		{
			props.users.map(user => {
				return <Card key={user.id} user={user}/>
			})
		}
	</div>
);
