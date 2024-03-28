import Codigo from '../models/codigo.js';

const fetchAll = async (_, res, next) => {
  try {
    const [allCodigos] = await Codigo.fetchAll();
    console.log(allCodigos);
    res.status(200).json(allCodigos);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const fetchCodigoByPalabraclave = async (req, res, next) => {
  try {
    const codigosCount = await Codigo.fetchCodigoByPalabraclave(
      req.params.palabraclave
    );
    console.log(codigosCount);
    res.status(200).json(codigosCount);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

const fetchRecientes = async (_, res, next) => {
  try {
    const [allCodigos] = await Codigo.fetchRecientes();
    console.log(allCodigos);
    res.status(200).json(allCodigos);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export { fetchAll, fetchCodigoByPalabraclave, fetchRecientes };
