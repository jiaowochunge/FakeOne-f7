import React from 'react'
import {Popup, View, Pages, Page, Navbar, NavRight, Link, ContentBlock} from 'framework7-react'

export default class Search extends React.Component {
  render() {
    return (
      <Popup id="search">
    		<View navbarFixed>
    			<Pages>
    				<Page>
    					<Navbar title="sousuo">
    						<NavRight>
    							<Link closePopup>Close</Link>
    						</NavRight>
    					</Navbar>
    					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
    				</Page>
    			</Pages>
    		</View>
    	</Popup>
    )
  }
}
