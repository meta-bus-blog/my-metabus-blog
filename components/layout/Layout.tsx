import classes from './Layout.module.scss'
interface Props {
    children: JSX.Element[] | JSX.Element;
  }
export const Layout = ({children}:Props) =>{
    return <div className={classes.wrap}>{children}</div>
}