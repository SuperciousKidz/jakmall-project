NARASI RUNNING PROJECT
1. Download projectnya di github.
2. Buka aplikasi seperti visual studio code, atau webstorm.
3. Open folder project yang telah didownload
4. Buka terminal di aplikasinya, dan ketik command: npm install
5. Kemudian ketik command: npm start
6. Kemudian project akan muncul dibrowser.

NARASI TEST PROJECT

====Halaman Delivery====
1. User dapat menekan tombol checklist yang bertuliskan "send as dropshipper" ataupun tidak.
2. User jika menekan tombol checklistnya, maka user diwajibkan untuk menginput dropshipper name dan dropshipper phone number.
Jika User tidak menekan tombol checklist, maka tidak diwajibkan untuk menginput dropshipper name dan dropshipper phone number, dikarenakan
input boxnya kedisable.
3. User diwajibkan untuk menginput email, phone number, dan address.

Case input untuk yang tidak melakukan checklist "send as dropshipper"
    Email: anonim@gmail.com
    Phone number: +6202390392
    Address: JL Durian NO. 10

Case input untuk yang melakukan checklist "send as dropshipper"
    Email: anonim@gmail.com
    Phone number: +6202390392
    Address: JL Durian NO. 10
    dropshipper name: agung
    dropshipper phone number: 0822120102

4. Jika User sudah melakukan input, maka user dapat mengklik button "continue to payment".

========================================================================================
Notes: Hasil dari semua data yang diinput akan disimpan dengan memakai localStorage.
Untuk localStoragenya dapat dilihat di halaman browser.

Cara melihat data localStorage yang disimpan
1. User harus ke halaman website projectnya.
2. User dapat menekan tombol f12
3. User pilih tab "application".
4. Kemudian diside barnya pilih localStorage dan pilih url dari localStoragenya.
5. Kemudian tekan data key "value".
6. Dengan begitu akan terlihat semua data yang masuk ke dalam localStorage.
========================================================================================


====Halaman Payment====
5. User dapat memilih salah satu shipment.
6. User dapat memilih salah satu payment.

Case input shipment dan payment
shipment: GO-send
payment: e-Wallet

7. Kemudian nantinya tombol pay with e-wallet akan bisa diakses.
8. Kemudian tekan tombol "pay with e-wallet"

========================================================================================
Notes: Jika user menekan tombol "back to delivery", maka data - datanya akan ke reset, dan bisa langsung liat di localStorage.

Notes: Hasil dari semua data yang diinput akan disimpan dengan memakai localStorage.
Untuk localStoragenya dapat dilihat di halaman browser.

Cara melihat data localStorage yang disimpan
1. User harus ke halaman website projectnya.
2. User dapat menekan tombol f12
3. User pilih tab "application".
4. Kemudian diside barnya pilih localStorage dan pilih url dari localStoragenya.
5. Kemudian tekan data key "value".
6. Dengan begitu akan terlihat semua data yang masuk ke dalam localStorage.
========================================================================================

====Halaman finish====
9. User akan dibawah ke halaman finish, dan melihat bahwa order id terlah digenerate secara otomatis.
10. Kemudian user dapat menekan tombol "go to homepage", agar dapat balik ke halaman Delivery

Notes: Ketika user menekan tombol "go to homepage" maka data - data dari localStoragenya akan kereset.