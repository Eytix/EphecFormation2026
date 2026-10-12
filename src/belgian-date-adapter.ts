import {Injectable} from '@angular/core';
import {NativeDateAdapter} from '@angular/material/core';

/**
 * NativeDateAdapter relies on Date.parse, which reads "12/11/2026" as December 11 (US format).
 * This adapter parses typed dates as dd/MM/yyyy (Belgian format).
 */
@Injectable()
export class BelgianDateAdapter extends NativeDateAdapter {

  override parse(value: unknown, parseFormat?: unknown): Date | null {
    if (typeof value === 'string') {
      const match = value.trim().match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/);
      if (!match) {
        return value.trim() ? this.invalid() : null;
      }
      const [, day, month, year] = match.map(Number);
      const date = new Date(year, month - 1, day);
      // Reject overflowing dates such as 31/02/2026
      if (date.getDate() !== day || date.getMonth() !== month - 1) {
        return this.invalid();
      }
      return date;
    }
    return super.parse(value, parseFormat);
  }

}
