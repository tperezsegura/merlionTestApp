import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { getEntities, updateEntity } from 'app/entities/sales/sales.reducer';

import TableTabs from './tableTabs'
import { ThemeProvider } from '@material-ui/core';
import { theme } from './customTheme';

export interface IHomeProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> { }

export const Home = (props: IHomeProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const { salesList } = props;

  return (
    <ThemeProvider theme={theme}>
      <TableTabs itemList={salesList} onStateChange={props.updateEntity} />
    </ThemeProvider>
  );
};

const mapStateToProps = ({ sales }: IRootState) => ({
  salesList: sales.entities
});

const mapDispatchToProps = {
  getEntities,
  updateEntity
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Home);