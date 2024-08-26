import { useEffect, useMemo, useState } from "react";
import { useStore } from "../../store/utils"
import { Autocomplete, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css"
import { Currensy } from "../../store/dataStore/currensy/Currensy";


const Convert = () => {
    const store = useStore();
    const currensies = store.dataStore.currensies.map((currensy) => currensy.code);
    useEffect(() => {
        store.dataStore.getCurrensies();
    }, [])

    const [currensyAmount, setCurrensyAmount] = useState('');
    const [leftCurrency, setLeftCurrency] = useState<Currensy | null>();
    const [rightCurrency, setRightCurrency] = useState<Currensy | null>();

    const rightValue = useMemo(() => {
        if (currensyAmount && leftCurrency && rightCurrency) {
            return +currensyAmount * (rightCurrency.value / leftCurrency.value);
        }
    }, [currensyAmount, leftCurrency, rightCurrency]);

    return (
        <div className={styles.ConvertWrapper}>
            <TextField
                id="outlined-required"
                label="Количество"
                type="number"
                onChange={(event) => { setCurrensyAmount(event.target.value) }}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={currensies}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField {...params} label="Валюта" />}
                onChange={(event: any, newValue: string | null) => { setLeftCurrency(store.dataStore.currensies.find((element) => element.code === newValue)) }}
            />
            <Typography> = </Typography>
            <TextField
                value={rightValue}
                placeholder="Сумма"
                InputProps={{
                    readOnly: true,
                }}
            />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={currensies}
                sx={{ width: 150 }}
                renderInput={(params) => <TextField {...params} label="Валюта" />}
                onChange={(event: any, newValue: string | null) => { setRightCurrency(store.dataStore.currensies.find((element) => element.code === newValue)) }}
            />

        </div>
    )
}

export default Convert