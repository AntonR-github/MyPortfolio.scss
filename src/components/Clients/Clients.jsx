import "./clients.scss";
import { clientsData } from '../Data/ClientsData';

const Clients = () => {
	return (
		<div className='clientSection'>
				<div className='clientTextWrapper'>
					<h2 className='clientTitle'>Clients</h2>
					<p className='clientText'>I’ve been building and maintaining web apps for clients around the world</p>
				</div>

				<div className='clientRow'>
					{clientsData.map((clients, clientsIndex) => (
						<div className='clientColumn' key={clientsIndex}>
							{clients.map((el, index) => (
								<div className='clientWrapper' key={index}>
									<img src={el.image} alt={el.name} className='clientImage' />
								</div>
							))}
						</div>
					))}
				</div>
		</div>
	);
};

export default Clients;