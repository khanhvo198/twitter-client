import { Avatar, Button, List, ListItem, ListItemIcon } from '@mui/material';
import { FC, ReactElement, useState } from 'react';
import axiosClient from '../../api/axiosClient';
import { EmojiIcon } from './components/EmojiIcon/EmojiIcon';
import { GifIcon } from './components/GifIcon/GifIcon';
import { LocationIcon } from './components/LocationIcon/LocationIcon';
import { MediaIcon } from './components/MediaIcon/MediaIcon';
import { PollIcon } from './components/PollIcon/PollIcon';
import { ScheduleIcon } from './components/ScheduleIcon/ScheduleIcon';
import { WorldIcon } from './components/WorldIcon/WorldIcon';
import { useTweetBoxStyle } from './style';

export const TweetBox: FC = (): ReactElement => {
  const classes = useTweetBoxStyle();

  const [tweet, setTweet] = useState<String | null>('');

  const createTweet = async (tweetText: String | null): Promise<void> => {
    const tweet = { text: tweetText };
    const response = await axiosClient.post('/tweets', tweet);

    console.log('Tweet is: ', response);
  };

  return (
    <div className={classes.tweetBoxContainer}>
      <div className={classes.tweetBoxWrapper}>
        <div className={classes.leftContainer}>
          <div className={classes.avatarContainer}>
            <Avatar sx={{ width: 48, height: 48, backgroundColor: 'green' }}>K</Avatar>
          </div>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.editorContainer}>
            <div className={classes.editorWrapper}>
              <div
                role="textbox"
                contentEditable="true"
                aria-multiline="true"
                aria-placeholder="What's happening?"
                placeholder="What's happening?"
                onInput={(e) => setTweet(e.currentTarget.textContent)}
              ></div>
            </div>
            <div className={classes.tweetSetting}>
              <div>
                <WorldIcon />
              </div>
              <div>Everyone can reply</div>
            </div>
            <div className={classes.borderLineBottomEditor}></div>
          </div>
          <div className={classes.toolbarContainer}>
            <List className={classes.toolBarListIcon}>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <MediaIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <GifIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem
                sx={{
                  padding: 0,
                  display: { xs: 'none', sm: 'none', md: 'none', xl: 'flex', lg: 'flex' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <PollIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <EmojiIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem
                sx={{
                  padding: 0,
                  display: { xs: 'none', sm: 'none', md: 'none', xl: 'flex', lg: 'flex' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <ScheduleIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <LocationIcon />
                </ListItemIcon>
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ borderRadius: '50px', textTransform: 'none' }}
              onClick={() => createTweet(tweet)}
            >
              Tweet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
