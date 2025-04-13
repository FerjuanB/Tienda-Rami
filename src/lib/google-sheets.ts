import { google } from "googleapis"
import type { Product } from "./types"

// Your sheet ID is the long string in your Google Sheet URL
// Example: https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/edit
// Sheet ID would be: 1AbCdEfGhIjKlMnOpQrStUvWxYz
const SHEET_ID = process.env.GOOGLE_SHEET_ID
const SHEET_RANGE = "'Hoja 3'!A:G" // Adjust based on your sheet name and range

export async function getProducts(): Promise<Product[]> {
  try {
    console.log('Starting to fetch products...');
    
    const sheets = google.sheets({
      version: "v4",
      auth: process.env.GOOGLE_API_KEY,
    })

    console.log('Fetching data from sheet:', SHEET_ID, 'with range:', SHEET_RANGE);
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
    })

    const rows = response.data.values || []
    console.log('Raw data received. Number of rows:', rows.length);
    
    const headers = rows[1]
    console.log('Headers row (row 2):', headers);

    // Find the index of each column
    const numeroIndex = headers.indexOf("N°")
    const articuloIndex = headers.indexOf("ARTICULO")
    const detalleIndex = headers.indexOf("DETALLE")
    const precioIndex = headers.indexOf("PRECIO C")
    const imagenIndex = headers.indexOf("IMAGEN")
    const estadoIndex = headers.indexOf("ESTADO")

    console.log('Column indexes:', {
      numeroIndex,
      articuloIndex,
      detalleIndex,
      precioIndex,
      imagenIndex,
      estadoIndex
    });

    const products = rows
      .slice(2)
      .filter((row) => row[estadoIndex] === "EN STOCK")
      .map((row) => ({
        id: row[articuloIndex],
        name: row[detalleIndex],
        price: Number(row[precioIndex].replace(/[^\d.-]/g, "")), // Convert to number without parsing as float
        // Ensure image URL is valid and accessible
        image: row[imagenIndex] ? 
          row[imagenIndex].trim().startsWith('http') ? row[imagenIndex].trim() : `https://${row[imagenIndex].trim()}`
          : "",
        
        status: row[estadoIndex],
      })) 

    console.log('Processed products:', products);
    console.log('Number of products in stock:', products.length);

    return products
  } catch (error) {
    console.error("Error fetching products:", error);
    if (error instanceof Error) {
      console.error("Error details:", {
        message: error.message,
        code: (error as any).code,
        status: (error as any).status
      });
    }
    return []
  }
}
