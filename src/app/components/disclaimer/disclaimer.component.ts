import { Component } from '@angular/core';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent {

  disclaimerText: String = `MajorExchangeRates.com make no claims concerning the validity or exactness of the information provided in the
  Currency Converter (the Service), and will not be held liable for any use, interpretation, or other implementation
  of said information. MajorExchangeRates.com make no warranties, express or implied, as to results to be obtained
  from use of such information, and make no express or implied warranties of condition, quality, performance,
  merchantability or fitness for a particular purpose or use. MajorExchangeRates.com shall have any liability for the
  accuracy of the information contained in the Service, or for omissions therein. None of the foregoing parties shall
  be liable for any third party claims or losses of any nature, including, but not limited to, lost profits, punitive,
  consequential, special, incidental, indirect or similar damages even if advised of the possibility of such damages.`;

  btnText: String = 'GO BACK';

}
