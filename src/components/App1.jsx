import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, Toolbar, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import {routes} from '../routes'
import EssayList from './pages/EssayList.jsx'
import MusicList from './pages/MusicList.jsx'
import MovieList from './pages/MovieList.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'

import '../css/list.css'

const MainViews = (props, context) => {
	return (
		<Views tabs>
      <View id="view-1" main tab active navbarThrough dynamicNavbar={true} url="/">
        <Navbar>
          <NavLeft>
            <Link icon="icon-bars" openPanel="left" />
          </NavLeft>
          <NavCenter sliding>Framework7</NavCenter>
          <NavRight>
            <Link icon="icon-bars" openPanel="right"></Link>
          </NavRight>
        </Navbar>
        <Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavLeft>
									<Link icon="icon-bars" openPanel="left" />
								</NavLeft>
								<NavCenter sliding>Framework7</NavCenter>
								<NavRight>
									<Link icon="icon-bars" openPanel="right"></Link>
								</NavRight>
							</Navbar>
						) : null}
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>
						</List>

					</Page>
				</Pages>
      </View>
      <View id="view-2" tab navbarFixed tabbarThrough>
        <Pages>
          <EssayList />
        </Pages>
      </View>
      <View id="view-3" tab navbarFixed tabbarThrough>
        <Pages>
          <MusicList />
        </Pages>
      </View>
      <View id="view-4" tab navbarFixed tabbarThrough>
        <Pages>
          <MovieList />
        </Pages>
      </View>
      <Toolbar tabbar>
        <Link tabLink="#view-1" active>首页</Link>
        <Link tabLink="#view-2">阅读</Link>
        <Link tabLink="#view-3">音乐</Link>
        <Link tabLink="#view-4">电影</Link>
      </Toolbar>
      <Profile />
      <Search />
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};


export const App = () => (
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>
		<Statusbar />
		<MainViews />
	</Framework7App>
);
