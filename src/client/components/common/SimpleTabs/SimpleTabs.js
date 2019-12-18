import React, { useState, useRef, useEffect, cloneElement } from 'react';
import RecipeSummary from '../../container/recipeSummary/RecipeSummary';
import { Link } from 'react-router-dom';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { motion } from 'framer-motion';
import moment from 'moment';
import './styles.css';

const cn = (...args) => args.filter(Boolean).join(' ');

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button
      className={cn('tabz-button', isActive && 'active')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const PanelList = ({ state, children }) => {
  const panelRef = useRef();
  const [height, set] = useState(0);
  const [activeIndex] = state;

  useEffect(() => {
    set(panelRef.current.offsetHeight);
  }, [activeIndex, set]);

  return (
    <motion.div
      style={{ overflow: 'hidden', height: '408px', padding: '10px' }}
    >
      <div ref={panelRef}>
        {cloneElement(children[activeIndex], { active: true })}
      </div>
    </motion.div>
  );
};

export default props => {
  const state = useState(0);
  const { recipes, notifications } = props;

  return (
    <Tabs state={state}>
      <div className="tabz nowrap">
        <div className="tabz-list">
          <Tab>My Recipes</Tab>

          <Tab>Favorites</Tab>

          <Tab>Notification</Tab>

          <Tab>Edit Profile</Tab>
        </div>

        <PanelList state={state}>
          <Panel>
            <ul>
              {recipes && recipes.map(recipe => {
                return (
                  <li>
                    <Link to={'/recipe/' + recipe.id}>
                    <RecipeSummary recipe={recipe} key={recipe.id} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Panel>
          <Panel>
            <p style={{ textAlign: 'start', padding: '10px 0px' }}>
              Yam and Stew
            </p>
            <p>Jollof Rice</p>
          </Panel>

          <Panel>
            <ul>
              {notifications &&
                notifications.map(item => {
                  return (
                    <li
                      key={item.id}
                      style={{ textAlign: 'start', padding: '10px 0px' }}
                    >
                      {item.content} about{' '}
                      {moment(item.time.toDate()).fromNow()}
                    </li>
                  );
                })}
            </ul>
          </Panel>

          <Panel>
            <p style={{ textAlign: 'start', padding: '10px 0px' }}>Name</p>
            <p>Location</p>
          </Panel>
        </PanelList>
      </div>
    </Tabs>
  );
};
