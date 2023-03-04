import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CenturumLogo from './CenturumLogo.png';
import CenturumContactUs from './CenturumContactUs.png';
import MVP from './MVP.png';
import SoftwareDev from './SoftwareDev.png';


function App() {
	return (
		<>
			<h1 style={{ color: 'red', background: "#3399FF",
				margin: '10px' }}><center>Centurum</center></h1>
			<Tabs style={{ width: '100%' }}>
				<TabList style={{
					fontSize: '20px',
					margin: '20px',
					color: "#1616b7",
					borderRadius: '10px',
				}}>
					<Tab style={{ background: 'lightblue', width: '300px', borderRadius: '05px' }}><center>Software Factory</center></Tab>
					<Tab style={{ background: 'lightblue', width: '300px', borderRadius: '05px' }}><center>Battle Management Aid</center></Tab>
				</TabList>
				<TabPanel style={{ fontSize: '20px',
					margin: '20px' }}>
					<Tabs defaultIndex={1}>
						<TabList>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '5px' }}>Software Development</Tab>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '5px' }}>DevSecOps Pipeline</Tab>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '5px' }}>MVP</Tab>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '5px' }}>Contact Us</Tab>
						</TabList>
						<TabPanel>
							<p style={{ background: '#3399FF' }}>
							<br></br>
              				<center><img height="790" width="30%" src={SoftwareDev} alt="Centurum" /></center>
							<br></br>
							</p>
						</TabPanel>
						<TabPanel>
							<p style={{ background: '#3399FF' }}>
							<br></br>
              				<center><img height="800" width="75%" src={CenturumLogo} alt="Centurum" /></center>
							  <br></br>
							</p>
						</TabPanel>
						<TabPanel>
							<p style={{ background: '#3399FF' }}>
							<br></br>
              				<center><img height="800" width="80%" src={MVP} alt="Centurum" /></center>
							<br></br>
							</p>
						</TabPanel>
						<TabPanel>
							<p style={{ background: '#3399FF' }}>
							<br></br>
              				<center><img height="800" width="1000" src={CenturumContactUs} alt="Centurum" /></center>
							<br></br>
							</p>
						</TabPanel>
					</Tabs>
				</TabPanel>
				<TabPanel style={{ fontSize: '20px',
					margin: '20px' }}>
					<Tabs>
						<TabList>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px'}}>FAA</Tab>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px'}}>AIS</Tab>
							<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px' }}>Ports</Tab>
              				<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px' }}>Cities</Tab>
             				<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px' }}>Terrorist Groups</Tab>
              				<Tab style={{ background: 'Gainsboro', width: '200px', borderRadius: '05px' }}>Weather</Tab>
						</TabList>
						<TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
            				<center><iframe title="FAA" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="95%" height="850" src="https://www.radarbox.com/?widget=1&z=7&lat=44.731784681055146&lng=5.675230593595626&labels=true&showAirlineLogo=true&showFn=true"></iframe></center>
             				</p>
						</TabPanel>
						<TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
							<iframe title="AIS" name="marinetraffic" id="marinetraffic" width="100%" height="850" scrolling="no" frameborder="1" src="http://www.marinetraffic.com/en/ais/embed/zoom:2/centery:37.4460/centerx:24.9467/maptype:1/shownames:false/mmsi:0/shipid:0/fleet:/fleet_id:/vtypes:/showmenu:/remember:false">Browser does not support embedded objects.<br/>Visit directly <a href="http://www.marinetraffic.com/">www.marinetraffic.com</a></iframe>
             				</p>
						</TabPanel>
						<TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
              				<center><iframe title="ports1" src="https://centurum.kb.us-central1.gcp.cloud.es.io:9243/goto/e4633de0-ac90-11ec-8577-6f27a4313857" height="500" width="100%"></iframe></center>;
              				<center><iframe title="ports2" src="https://centurum.kb.us-central1.gcp.cloud.es.io:9243/goto/a09ad910-ac95-11ec-8577-6f27a4313857" height="600" width="700"></iframe></center>;
              				</p>
						</TabPanel>
           				 <TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
							<iframe title="Cities" src="https://www.google.com/maps/d/embed?mid=1pqYjpATg2XASbfh77pT-iVaiWEFbzyA&ehbc=2E312F" width="95%" height="850"></iframe>
							</p>
            			</TabPanel>
            			<TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
              				<center><iframe title="terroristgroups" src="https://centurum.kb.us-central1.gcp.cloud.es.io:9243/app/dashboards#/view/63a17560-a36a-11ed-a0f4-cb24474e34a6?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))" height="900" width="100%"></iframe></center>;
             				</p>
            			</TabPanel>
            			<TabPanel>
							<p style={{ background: 'lightblue', color: 'blue' }}>
              				<center><iframe title="weather" width="95%" height="850" src="https://embed.windy.com/embed2.html?lat=40.725&lon=-73.944&detailLat=40.725&detailLon=-73.944&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe></center>
              				</p>
            			</TabPanel>
					</Tabs>
				</TabPanel>
			</Tabs>
		</>
	);
}

export default App;
