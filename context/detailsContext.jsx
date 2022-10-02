import { createContext, useContext, useState } from "react";

const DetailContext = createContext();

export const DetailContextProvider = props => {
    const { children } = props;
    const [detail, setDetail] = useState({});
    return(
        <DetailContext.Provider value={{ detail, setDetail }}>
            { children }
        </DetailContext.Provider>
    )
}

export const useDetailContext = () => useContext(DetailContext);