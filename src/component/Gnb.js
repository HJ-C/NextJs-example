import { Menu } from "semantic-ui-react"

export default function Gnb(){
    const activeItem = 'home'
    return (
        <Menu>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item
          name='aboutUs'
          active={activeItem === 'aboutUs'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='jobs'
          active={activeItem === 'jobs'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='locations'
          active={activeItem === 'locations'}
        //   onClick={this.handleItemClick}
        />
      </Menu>
    )
}