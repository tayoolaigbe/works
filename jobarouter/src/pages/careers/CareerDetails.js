import { useParams, useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
	const { id } = useParams();
	const career = useLoaderData();
	console.log(id, career);
	return (
		<div className="career-details">
			<h2>Career Details for: {career.title}</h2>
			<p>Starting salary: {career.salary}</p>
			<p>Location: {career.location}</p>
			<div className="deatils">
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
					repellat, accusamus et, laudantium at, voluptas neque architecto
					explicabo cum commodi omnis ullam porro veniam nobis magnam autem
					voluptate doloribus ipsam?
				</p>
			</div>
		</div>
	);
}

// loader function
export const careerDetailsLoader = async ({ params }) => {
	const { id } = params;
	const res = await fetch(`http://localhost:4000/careers/${id}`);
	console.log(res);
	if (!res.ok) {
		throw Error('Could not find that career');
	}
	return res.json();
};
