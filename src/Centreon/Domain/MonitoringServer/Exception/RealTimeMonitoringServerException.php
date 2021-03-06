<?php

/*
 * Copyright 2005 - 2021 Centreon (https://www.centreon.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * For more information : contact@centreon.com
 *
 */
declare(strict_types=1);

namespace Centreon\Domain\MonitoringServer\Exception;

/**
 * This class is designed to contain all exceptions for the context of the real time monitoring server.
 *
 * @package Centreon\Domain\MonitoringServer\Exception
 */
class RealTimeMonitoringServerException extends \Exception
{
    /**
     * @param \Throwable $ex
     * @return self
     */
    public static function findRealTimeMonitoringServersException(\Throwable $ex): self
    {
        return new self(_('Error when searching for real time monitoring servers'), 0, $ex);
    }
}
