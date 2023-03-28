import React from 'react';
import { Link } from 'react-router-dom';
import { primerMayuscula } from '../helper/helper';

export const CardPokemon = ({ pokemon }) => {

	return (
		<Link to={`/pokemon/${pokemon.id}`} className='card-pokemon' >
			<div className={`card-img ${pokemon.types[0].type.name}`}>
				<img
					src={pokemon.sprites.other.home.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>

			<div className={`card-info mam${pokemon.types[0].type.name}`} >



				<span className='pokemon-id'>N° {pokemon.id}</span>
				<h3>{primerMayuscula(pokemon.name)}</h3>
				<div className='card-types'>
					{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</Link >
	);
};
