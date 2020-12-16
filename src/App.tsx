import React from 'react'
import './App.scss'
import { Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layouts/AdminLayout/AdminLayout'
import MainLayout from './Layouts/MainLayout/MainLayout'
import { RootState } from './Redux'
import { setShowPaymentModal } from './Redux/actions/modal'
import { ModalState } from './Redux/interfaces/interfaces'
import { connect } from 'react-redux'
import ModalPayment from './SharedComponents/ModalPayment/ModalPayment'

interface AppProps {
  setShowPaymentModal: (isActive: boolean) => void
  modal: ModalState
}

interface AppState {}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Container fluid className="App p-0">
        {/* Модалочки */}
        {this.props.modal.modalPayment.isActive ? (<ModalPayment />) : null}

        <Switch>
          <Route path="/admin" component={AdminLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  setShowPaymentModal,
}

const mapStateToProps = (state: RootState) => {
  const modal = state.modal
  return {
    modal
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
