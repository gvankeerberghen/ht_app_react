import * as React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';

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
        marginBottom: 12,
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
            <Tab label="Links" >
            <div>
                <h2 style={styles.headline as any}>Links</h2>
                <List>
                    {tech.links.map(link =>
                      <ListItem
                        leftAvatar={<Avatar icon={<FileFolder />} />}
                        primaryText={link.name}
                        secondaryText={link.description}
                      />
                    )}
                  </List>
            </div>
            </Tab>
            <Tab label="Reviews" >
            <div>
                <h2 style={styles.headline as any}>Opinions</h2>
                <p>
                  This is to be fillable.
                </p>
            </div>
            </Tab>
        </Tabs>
    </Paper>
    );
  }
}

export default TechCard;
