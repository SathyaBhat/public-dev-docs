---
sidebar_position: 3
sidebar_class_name: sidebar-item-develop-ttl
sidebar_label: TTL でデータを期限切れにする
title: Expiring data with Time to Live (TTL) in Momento Serverless Cache
description: Learn about expiring data from a cache using Time to Live (TTL) in Momento Serverless Cache
slug: /learn/how-it-works/expire-data-with-ttl
---

# Expire data with Time-to-Live (TTL) in Momento Serverless Cache

This document provides an overview of Momento Serverless Cache’s time-to-live (TTL) functionality. TTL allows items to expire automatically from the cache after a specified number of seconds.

Note: The service handles TTL expiry and does not consume any bandwidth for metering in your monthly transfer cost.

## Expire items after a specified number of seconds
The TTL value is the number of seconds from when Momento Serverless Cache writes the item to storage until the item expires from the cache. For example, if you set an item’s TTL value to 900 seconds (15 minutes), the item will expire 15 minutes after insertion into the cache.

## How to set TTL in Momento Serverless Cache
There are three locations to set a TTL value:
1. You must set a default TTL value when creating a cache client object in a Momento SDK. However, any SET operation using that object can omit the TTL value and will use that default value.

    ```javascript
    const MY_DEFAULT_TTL = 60; // This value is in seconds
    const momento = new SimpleCacheClient(authToken, MY_DEFAULT_TTL);
    ```


2. Optionally, in a SET operation, you can override the default value created with the SimpleCacheClient object. If you do not include a value for TTL in this SET operation, the value used to create the cache client object is used.

    ```javascript
    await momento.set(CACHE_NAME, 'key', 'my value', 40)
    // The number 40 is the TTL value in seconds for this item to expire.
    ```

3. If you’re using the CLI when you run the command `momento configure`, it writes a configuration file (~/.momento/config) and stores a value you specify for a default TTL in that file. If you write an item with the CLI from that same user and don’t specify a TTL in the SET operation, the CLI will use the value from that configuration file.

    Note: Unless you copy the configuration file with your application, that file and its contents are unique to the location where you ran the `momento configure` command.

## Frequently asked questions about TTL

<details>
  <summary>Why do caches need Time to Live (TTL)?</summary>

Usually, a cache entry is not the definitive source of a piece of data. Rather, a cache entry is a faster, cheaper, and less durable way to store a piece of data, whether it's an individual record from a different database, some aggregated or computed information from multiple records or sources, or even a resource from an external, third-party application. Using a cache helps to improve latency or reduce load on a dependency in our application. In using a cache, we're anticipating that our cache entry will be requested by another client soon.

And yet, most caches don't hold onto all of their entries forever. Partly, this is a function of data staleness. The data you have stored in a cache entry may be changed over time, in which case you want a client to retrieve something fresher than the cached entry. If you have strict requirements around data consistency, you may need to directly update or remove a cache entry whenever its underlying data changes. In other situations, you may be fine serving potentially stale data for a time, while still expiring it regularly to ensure some amount of freshness.

A second consideration is simple resource constraints. Caches usually hold their data in RAM, and RAM is a scarce resource. If you never expire entries from your cache, you may find your RAM full when you try to cache new items. Your cache could reject the new entry or, more likely, choose to evict items based on a predetermined eviction algorithm.

Most caches were built for a pre-cloud world and thus require you to pre-provision specific amounts of memory available for your cache. For these caches, proper TTL management is critical as overfilling your cache can result in availability issues or cache evictions in ways you don't prefer.

In contrast, Momento is designed for the elasticity of the modern cloud. You don't need to pre-provision your cache size -- your Momento cache automatically expands and contracts based on the operations you perform against it. In the normal course of operations, Momento will not evict items based on a lack of available memory.

That being said, you should still use TTL on items in your Momento cache to avoid cache staleness and to reduce costs. Let's see how to use TTL with Momento's SimpleCache.
</details>

<details>
  <summary>What's the maximum TTL I can set?</summary>
By default, the limit you can set the TTL for an item is 24 hours. If you need to have data in the cache beyond that time, please <a href="mailto:support@momenthq.com">contact Momento Support</a>.
</details>