---
title: Bluetooth 5 on Steroids - How Bluetooth Mesh is redefining IoT
excerpt: >-
  The rapidly evolving and expanding IoT market provides big opportunities for device manufacturers. New applications and the huge increase of devices requiring wireless connections has also kept various wireless standard interest groups busy developing new standards or updating existing ones to fulfill IoT-specific needs.
date: 2019-03-24
thumb_img_path: images/bt5.jpg
content_img_path: images/bt5.jpg
layout: post
---

Written by [Eric Mutua](#)

The projected market growth for IoT-related applications and devices varies but one estimate puts the figure at around 16% CAGR up to the year 2025 . This wide range of IoT applications will require the use of not one but several wireless standards if all usage scenarios are to be realized. This in turn also implies that coexistence issues need to be addressed adequately. The increased demand for suitable gateway devices is obvious.

According to market share estimates, Bluetooth will be used in 60 percent of all wireless devices by the year 2021 and Bluetooth low energy correspondingly in 16 percent of devices. Most of the increase will be seen in smart home, beacon, connected home, and wearables applications. According to the computer magazine Datamation, ABI Research is expecting Bluetooth with low energy shipments to have a CAGR of 34 percent between 2016 and 2021. Such growth requires the wireless standards to be extremely robust and dependable. What is also needed are manufacturers who utilize the possibilities allowed by the wireless standards to the maximum in their hardware offering and who provide easy-to-use and powerful software stacks.

Bluetooth has already existed for almost 20 years and is used today in approximately 8.2 billion devices, so it has already demonstrated its robustness and dependability. To fulfill requirements set forth by the new IoT scene, the Bluetooth SIG announced the Bluetooth 5 specification in December 2016. The latest Bluetooth standard improves bandwidth, range, broadcasting, and coexistence features.

**x2Speed**

One of the major features in Bluetooth 5.0 is a new 2 Mbps PHY. Bluetooth 4.x devices only support a single 1 Mbps PHY rate, but Bluetooth 5 devices are capable of supporting either the 1 Mbps or 2 Mbps PHY rates. By doubling the PHY rate, the amount of data that devices can transfer is almost doubled as shown in the table below. Another benefit of the faster PHY is the reduced time required for transmitting and receiving data, which translates to a lower average current consumption. This is explained by the fact that more time can be spent in low-power sleep modes.

<div class="responsive-table">
  <table>
    <caption>Comparison of 1M and 2M Bluetooth low energy PHYs</caption>
    <thead>
      <tr>
        <th>PHY</th>
        <th>Symbol rate</th>
        <th>Error-detection</th>
        <th>Range multiplier</th>
        <th>PDU Length</th>
        <th>Minimum packet time</th>
        <th>Maximum packet time</th>
        <th>Maximum throughput</th>
      </tr>
    </thead> 	 	 	 	 	 	
    <tbody>
      <tr>
        <td>1M</td>
        <td>1 M symbols/s</td>
        <td>CRC</td>
        <td>1 x</td>
        <td>0 - 257 B</td>
        <td>80 µs</td>
        <td>2.12 ms</td>
        <td>800 kbps</td>
      </tr>	 	 	 	
      <tr>
        <td>2M</td>
        <td>1 M symbols/s</td>
        <td>CRC</td>
        <td>0.8 x</td>
        <td>0 - 257 B</td>
        <td>44 µs</td>
        <td>1.064 ms</td>
        <td>1438 kbps</td>
      </tr>
    </tbody>
  </table>
</div>

Doubling the throughput while providing low-power consumption will allow applications to provide faster data transfers for use cases like over-the-air (OTA) firmware upgrades or transmitting of days’ worth of collected data from a sensor and also improve latency and responsiveness for time critical applications such as medical devices and security systems.

Bluetooth 5 devices supporting 2 Mbps PHY are still fully backwards compatible with Bluetooth 4 devices and will use the 1 Mbps PHY to communicate with devices that do not support the new 2 Mbps PHY. It is expected that the first smart phones and tablets supporting Bluetooth 5 and 2 Mbps PHY should appear in the market in 2017 and that the majority of smartphones in the market will be Bluetooth 5 compliant within the next two to four years.

 <thead>
      <tr>
        <th>
        <img class="lazy-loading lazy-loaded" src="https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/mbps-phy-power-consumption.png?$Large2Column30pct$" style="display: inline-block;" data-interchange="[https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/mbps-phy-power-consumption.png?$Large2Column50pct$, small], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/mbps-phy-power-consumption.png?$Large2Column30pct$, medium], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/mbps-phy-power-consumption.png?$Large2Column50pct$, large], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/mbps-phy-power-consumption.png?$Large2Column50pct$, default]">
        </th>
        <th>
        <img class="lazy-loading lazy-loaded" src="https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/2mbps-phy-power-consumption.PNG?$Large2Column30pct$" style="display: inline-block;" data-interchange="[https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/2mbps-phy-power-consumption.PNG?$Large2Column50pct$, small], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/2mbps-phy-power-consumption.PNG?$Large2Column30pct$, medium], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/2mbps-phy-power-consumption.PNG?$Large2Column50pct$, large], [https://siliconlabs-h.assetsadobe.com/is/image//content/dam/siliconlabs/images/white-papers/2mbps-phy-power-consumption.PNG?$Large2Column50pct$, default]">
        </th>
      </tr>
</thead>

The images above show the average current consumption difference between 1 Mbps PHY and 2 Mbps PHY connections measured between two EFR32 Blue Gecko SoCs. The devices used +8 dBm TX power, 25 ms connection interval, and were only sending the shortest 80 μs and 44 μs packets, which provides the least amout of power saving. Even so, the 2 Mbps PHY provides about 15 percent reduction to average power consumption. When using the full length Bluetooth packets and 2M PHY, power savings of up to 40-50 percent should be achievable.

**Bluetooth 5 Support on Phones and Tablets**

The first Bluetooth 5 enabled phones and tablets are expected to arrive on the market during 2017 and typically it has taken 2-4 years after a new Bluetooth specification release for the majority of the phones on the market to support the new standard. At the time of this writing the first phone on the market with Bluetooth 5 support is the Samsung Galaxy S8, which supports the Bluetooth LE 2M PHY. As the new features, with the exception of the errata in the Bluetooth 5 specification, are optional, it is always recommended to consult the manufacturer or understand which of the Bluetooth 5 features are supported by a particular device.

**Summary**

Bluetooth 5 contains improvements and new features which place this robust and proven wireless standard ahead of the game just as the industry starts the race towards the age of IoT in earnest. The improvements introduced in Bluetooth 5 enable the continued and increasing use of Bluetooth devices in evolving smart home, medical, wearable, automotive, beaconing, location, and many other IoT applications.

Silicon Labs has already launched the first Bluetooth 5 compatible EFR32 Blue Gecko SoC already supporting the Bluetooth LE 2M PHY and some of the advertisement enhancements. More information and more detailed specifications of the BlueGecko SoCs and modules can be found from [http://www.silabs.com/bluegecko](http://www.silabs.com/bluegecko).
