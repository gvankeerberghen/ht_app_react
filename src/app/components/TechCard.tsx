import * as React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import {typeIcons} from '../constants/LinksTypeIcons';

import {purple500} from 'material-ui/styles/colors';

interface IMainProps {
  tech: any;
};

interface IMainState {};

class TechCard extends React.Component<IMainProps, IMainState> {
  static propTypes = {
  };

  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    const {tech} = this.props;

    const styles = {
      headline: {
        fontSize: 24,
        paddingTop: 16,
        margin: 12,
        fontWeight: 400,
      },
    };

    return (
    <Paper>
      <Card>
        <CardHeader
            title={tech.name}
            subtitle={tech.type}
        />
        <CardText>
            {tech.description}
        </CardText>
      </Card> 

      <Tabs>
        <Tab label='Links'>
          <List style={{ maxHeight: 500, overflow: 'scroll' as 'scroll'}}>
            {tech.links.map(link =>
              <ListItem
                leftAvatar={<Avatar backgroundColor={purple500} icon={
                  <FontIcon className='material-icons'>{typeIcons[link.type] || 'link'}</FontIcon>} />
                }
                primaryText={link.name}
                secondaryText={link.description}
                secondaryTextLines={2}
              />
            )}
          </List>
        </Tab>
        <Tab label='Reviews' >
        <div>
            <h2 style={styles.headline as any}>Coming soon...</h2>
        </div>
        </Tab>
      </Tabs>
    </Paper>
    );
  }
}

export default TechCard;
